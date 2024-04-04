'use client';
import {
  Button,
  Card,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemProps,
  Spinner,
  Typography,
} from '@/components/MaterialTailwind';
import {
  ChangeEvent,
  ReactNode,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { checkEmpty } from '@/utils/checkEmpty';
import SearchLine from '../SvgComponents/line/SearchLine';
import { useGetSuggestSearchTagQuery } from '@/api/appService/search/searchApi';
import { SearchScopes } from '@/utils/enums';
import { useDebounce, useSessionStorage } from 'usehooks-ts';
import { useDebouncedCallback } from 'use-debounce';
import { useParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

type ItemProps = {
  children: ReactNode;
  active?: boolean;
};

const Item = forwardRef<HTMLDivElement, ItemProps & Omit<ListItemProps, 'ref'>>(
  ({ children, active, ...rest }, ref) => {
    const id = useId();

    return (
      <ListItem
        ref={ref}
        role="option"
        id={id}
        aria-selected={active}
        selected={active}
        {...rest}
      >
        {children}
      </ListItem>
    );
  },
);
Item.displayName = 'AutocompleteItem';

export const HeaderSearch = ({
  mapLink,
  searchCachelimit = 5,
  delay = 1000,
}: {
  mapLink?: (value: string) => string;
  searchCachelimit?: number;
  delay?: number;
}) => {
  const router = useRouter();
  const params = useParams();
  const keyword = params?.['keyword'] as string;

  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>(keyword);
  const [typing, setTyping] = useState<boolean>(false);
  const [cacheSearch, setCacheSearch] = useSessionStorage<
    string[] | null | undefined
  >('cache_search', []);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      }),
    ],
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
      }),
    ],
  );

  //   const {
  //     field: { value, onChange: onFieldChange, onBlur: onFieldBlur, ref },
  //     fieldState: { error },
  //     formState: { errors },
  //   } = useController({ name });

  const debouncedTypingCallback = useDebouncedCallback(
    () => setTyping(false),
    delay,
  );

  const debouncedInputValue = useDebounce<string>(inputValue, delay);

  const results = useGetSuggestSearchTagQuery(
    debouncedInputValue,
    SearchScopes.map(({ scope_id, scope_name }) => ({
      scope_id,
      options: {
        enabled: !typing && !checkEmpty(debouncedInputValue),
      },
    })),
  );

  const mappedResult = results
    ?.filter(
      (item) =>
        !checkEmpty(item?.data?.data?.data) &&
        (item?.data?.data?.data?.length as number) > 0,
    )
    ?.map((item) => item?.data?.data?.data)
    ?.flat();

  const onClick = () => {
    //if (checkEmpty(inputValue)) return;

    setOpen(true);
    setActiveIndex(0);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setTyping(true);
    debouncedTypingCallback();

    if (!checkEmpty(value)) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  };

  const goToSearch = (keyword: string) => {
    if (checkEmpty(keyword)) return;
    if (searchCachelimit > 0) {
      setCacheSearch((prev) => [
        ...new Set([
          keyword,
          ...((prev?.length as number) >= searchCachelimit &&
          !prev?.includes(keyword)
            ? prev?.slice(0, -1) ?? []
            : prev ?? []),
        ]),
      ]);
    }
    router.push(mapLink?.(keyword) ?? '/');
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        goToSearch(inputValue);
      }}
      className="w-full"
    >
      <Input
        type="search"
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          onClick,
          value: inputValue,
          placeholder: 'Search',
          'aria-autocomplete': 'list',
          // onKeyDown: (event) => {
          //   if (
          //     event.key === 'Enter' &&
          //     activeIndex != null &&
          //     mappedResult?.[activeIndex]
          //   ) {
          //     setInputValue(mappedResult?.[activeIndex]?.tag_name ?? '');
          //     setActiveIndex(null);
          //     setOpen(false);
          //   }
          // },
        })}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
        containerProps={{
          className: `min-w-0 ${
            open
              ? 'rounded-t-2xl border-t-2 border-x-2'
              : 'rounded-3xl border-2'
          } `,
        }}
        className="transition-primary h-10 w-full border-none border-gray-300 pl-3 pr-10 text-sm font-medium placeholder:font-normal focus:outline-none focus:ring-0"
        color="green"
        // onBlur={onFieldBlur}
      />
      <IconButton
        type="submit"
        className="transition-primary !absolute right-0 top-0 h-10 w-10 rounded-full bg-transparent shadow-none hover:shadow-none"
      >
        <SearchLine className="w-5 h-5 text-black hover:text-primary" />
      </IconButton>

      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              visuallyHiddenDismiss
              closeOnFocusOut
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                {...getFloatingProps({
                  ref: refs.setFloating,
                  style: {
                    ...floatingStyles,
                    overflowY: 'auto',
                  },
                })}
                className="flex flex-col h-fit bg-white shadow-xl rounded-b-xl z-[9999] border-b-2 border-x-2 max-h-10"
              >
                <hr className="w-[80%] self-center font-bold" />
                {(cacheSearch?.length as number) > 0 && (
                  <div className="p-3">
                    <Typography variant="small">Recent searches</Typography>
                    <div className="flex flex-row gap-2">
                      {cacheSearch?.map((item, index) => (
                        <Button
                          key={index}
                          type="button"
                          variant="outlined"
                          color="gray"
                          className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
                          onClick={() => {
                            setInputValue(item);
                            goToSearch(item);
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3">
                  <Typography variant="small">Popular searches</Typography>
                  <div className="flex flex-row gap-2">
                    <Button
                      type="button"
                      variant="outlined"
                      color="gray"
                      className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
                    >
                      ăn gì
                    </Button>
                    <Button
                      type="button"
                      variant="outlined"
                      color="gray"
                      className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
                    >
                      trưa
                    </Button>
                  </div>
                </div>

                <List>
                  {!checkEmpty(inputValue) && (
                    <Item
                      key="findBy"
                      ref={(node) => {
                        listRef.current[0] = node;
                      }}
                      active={activeIndex === 0}
                      onClick={() => {
                        setOpen(false);
                        refs.domReference.current?.focus();
                        goToSearch(inputValue);
                      }}
                    >
                      <ListItemPrefix>
                        <SearchLine className="w-5 h-5" />
                      </ListItemPrefix>
                      Tìm theo &nbsp; <strong>{`"${inputValue}"`}</strong>
                    </Item>
                  )}
                  {mappedResult
                    //?.filter((item) => item?.tag_name?.includes(inputValue))
                    ?.map((item, index) => (
                      <Item
                        key={`${item?.linking_id}-${item?.tag_id}`}
                        {...getItemProps({
                          ref: (node) => {
                            listRef.current[index + 1] = node;
                          },
                          onClick() {
                            setInputValue(item?.tag_name ?? '');
                            setOpen(false);
                            refs.domReference.current?.focus();
                            goToSearch(item?.tag_name ?? '');
                          },
                        })}
                        active={activeIndex === index + 1}
                      >
                        <ListItemPrefix>
                          <SearchLine className="w-5 h-5" />
                        </ListItemPrefix>
                        {item?.tag_name}
                      </Item>
                    ))}
                </List>

                {/* {results?.some((result) => result.isFetching) ? (
                  <div className="justify-self-center self-center flex flex-row gap-2">
                    <Spinner className="h-6 w-6 self-center" />
                    <Typography className="self-center">Đang tải...</Typography>
                  </div>
                ) : (
                  
                )} */}
              </motion.div>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </form>
  );
};
