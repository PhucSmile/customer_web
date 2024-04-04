'use client';
import { useController, useFormContext } from 'react-hook-form';
import {
  Input,
  List,
  ListItem,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@/components/MaterialTailwind';
import { FC, useMemo, useState } from 'react';
import {
  FormInputAddressSelectPropsType,
  TabType,
} from '@/types/ReactHookFormTypes/FormInputAddressSelectPropsType';
import { useGetAllGeographyProvinceQuery } from '@/api/appService/geography/geographyProvinceApi';
import { useGetGeographyWardByDistrictIdQuery } from '@/api/appService/geography/geographyWardApi';
import { checkEmpty } from '@/utils/checkEmpty';
import { useGetGeographyDistrictByProvinceIdQuery } from '@/api/appService/geography/geographyDistrictApi';
import CloseLine from '../SvgComponents/line/CloseLine';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoPlacement,
  autoUpdate,
  shift,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { checkEqual } from '@/utils/checkEqual';

const CustomTabPanelComponent: FC<TabType> = ({
  value,
  currentField,
  nextAction,
  queryResult: { data: listData },
  clearDependentFields,
}) => {
  const {
    field: { value: currentValue, onChange: onFieldChange },
  } = useController({ name: currentField ?? '' });

  return (
    <TabPanel key={value} value={value}>
      <List className="overflow-y-auto max-h-[30vh]">
        {listData?.data?.data?.map(({ id, name }) => (
          <ListItem
            key={id}
            ripple={false}
            selected={currentValue === id}
            onClick={() => {
              onFieldChange(id);
              clearDependentFields?.();
              nextAction?.();
            }}
          >
            {name}
          </ListItem>
        )) ?? <span></span>}
      </List>
    </TabPanel>
  );
};

export const FormInputAddressSelect: FC<FormInputAddressSelectPropsType> = ({
  provinceField,
  districtField,
  wardField,
  label,
  placeholder = ' ',
  className,
}) => {
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [open, setOpen] = useState<boolean>(false);
  const [openTab, setOpenTab] = useState<
    'Province' | 'District' | 'Ward' | string
  >('Province');

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      shift(),
      autoPlacement(),
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

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useRole(context, { role: 'listbox' }),
    useDismiss(context),
  ]);

  const onClickInput = () => setOpen(true);

  const provinceQueryResult = useGetAllGeographyProvinceQuery();

  const districtQueryResult = useGetGeographyDistrictByProvinceIdQuery(
    getValues(provinceField),
    {
      enabled:
        !checkEmpty(provinceField) && !checkEmpty(getValues(provinceField)),
    },
  );

  const wardQueryResult = useGetGeographyWardByDistrictIdQuery(
    getValues(districtField),
    {
      enabled:
        !checkEmpty(provinceField) &&
        !checkEmpty(districtField) &&
        !checkEmpty(getValues(provinceField)) &&
        !checkEmpty(getValues(districtField)),
    },
  );

  const tabs = useMemo(
    () => [
      {
        pos: 1,
        queryResult: provinceQueryResult,
        label: 'Tỉnh - Thành',
        value: 'Province',
        currentField: provinceField,
        nextAction: () => setOpenTab('District'),
        clearDependentFields: () => {
          setValue(districtField, '');
          setValue(wardField, '');
        },
      },
      {
        pos: 2,
        queryResult: districtQueryResult,
        label: 'Quận - Huyện',
        value: 'District',
        currentField: districtField,
        getValuesField: provinceField,
        nextAction: () => setOpenTab('Ward'),
        clearDependentFields: () => {
          setValue(wardField, '');
        },
      },
      {
        pos: 3,
        queryResult: wardQueryResult,
        label: 'Phường - Xã',
        value: 'Ward',
        nextAction: () => {
          setOpen(false);
          setOpenTab('Province');
        },
        currentField: wardField,
        getValuesField: districtField,
      },
    ], //.sort((a, b) => (a?.pos > b?.pos ? 1 : -1))
    [
      provinceField,
      districtField,
      wardField,
      provinceQueryResult,
      districtQueryResult,
      wardQueryResult,
      setValue,
    ],
  );

  const renderedName = [
    wardQueryResult?.data?.data?.data?.find((item) =>
      checkEqual(item.id, getValues(wardField ?? '')),
    )?.name,
    districtQueryResult?.data?.data?.data?.find((item) =>
      checkEqual(item.id, getValues(districtField ?? '')),
    )?.name,
    provinceQueryResult?.data?.data?.data?.find((item) =>
      checkEqual(item.id, getValues(provinceField ?? '')),
    )?.name,
  ]
    ?.filter((item) => item)
    ?.join(', ');

  return (
    <div className="relative flex flex-col">
      <Input
        {...getReferenceProps({
          ref: refs.setReference,
          onClick: onClickInput,
          value: renderedName,
          readOnly: true,
          label,
          placeholder,
          'aria-autocomplete': 'list',
        })}
        icon={
          renderedName?.length > 0 ? (
            <CloseLine
              className="w-6 h-6 cursor-pointer hover:text-blue-500"
              onClick={() => {
                setOpen(false);
                setOpenTab('Province');
                setValue(provinceField, '');
                setValue(districtField, '');
                setValue(wardField, '');
              }}
            />
          ) : null
        }
        className={`${className} ${open ? 'rounded-b-none' : ''}`}
        error={
          Boolean(errors?.[provinceField]) ||
          Boolean(errors?.[districtField]) ||
          Boolean(errors?.[wardField])
        }
      />
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
                  },
                })}
                className="flex flex-col h-fit bg-white shadow-xl rounded-b-xl z-[9999] border-b-[1px] border-blue-gray-200 border-x-[1px] max-h-12 p-2"
              >
                <Tabs key={`${openTab}-tab`} value={openTab}>
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className:
                        'bg-transparent border-b-2 border-blue-500 shadow-none rounded-none',
                    }}
                  >
                    {tabs?.map(({ label, value, getValuesField }) => (
                      <Tab
                        key={value}
                        value={value}
                        color="red"
                        //onClick={() => setOpenTab(value)}
                        className={openTab === value ? 'text-blue-500' : ''}
                        disabled={
                          !checkEmpty(getValuesField) &&
                          checkEmpty(getValues(getValuesField ?? ''))
                        }
                      >
                        {`${label} `}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: { x: 300 },
                      mount: { x: 0 },
                      unmount: { x: 300 },
                    }}
                  >
                    {tabs?.map((item) => (
                      <CustomTabPanelComponent key={item.value} {...item} />
                    ))}
                  </TabsBody>
                </Tabs>
              </motion.div>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>

      {/* <ErrorMessage
        name={provinceFieldName}
        errors={errors}
        render={({ message }) => (
          <span className="text-sm text-red-500 mt-1">{message}</span>
        )}
      />
      <ErrorMessage
        name={districtFieldName}
        errors={errors}
        render={({ message }) => (
          <span className="text-sm text-red-500 mt-1">{message}</span>
        )}
      />
      <ErrorMessage
        name={wardFieldName}
        errors={errors}
        render={({ message }) => (
          <span className="text-sm text-red-500 mt-1">{message}</span>
        )}
      /> */}
    </div>
  );
};
