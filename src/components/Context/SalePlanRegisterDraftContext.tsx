'use client';
import { SalePlanRegisterDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftSchema';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {
  useSessionStorage,
  useIsFirstRender,
  useUpdateEffect,
} from 'usehooks-ts';

export const SalePlanRegisterDraftContext = createContext<{
  salePlanRegisterDraftData: SalePlanRegisterDraftType[] | null | undefined;
  setSalePlanRegisterDraftData: Dispatch<
    SetStateAction<SalePlanRegisterDraftType[] | null | undefined>
  >;
}>({
  salePlanRegisterDraftData: null,
  setSalePlanRegisterDraftData: () => {},
});

export const useSalePlanRegisterDraftContext = () =>
  useContext(SalePlanRegisterDraftContext);

export const SalePlanRegisterDraftContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const isFirstRender = useIsFirstRender();
  const [data, setData] = useState<
    SalePlanRegisterDraftType[] | null | undefined
  >([]);
  const [salePlanRegisterDraftData, setSalePlanRegisterDraftData] =
    useSessionStorage<SalePlanRegisterDraftType[] | null | undefined>(
      'sale_plan_register_draft',
      null,
    );

  useUpdateEffect(() => {
    setData(salePlanRegisterDraftData);
  }, [salePlanRegisterDraftData]);

  return (
    <SalePlanRegisterDraftContext.Provider
      value={{
        salePlanRegisterDraftData: data,
        //(!isFirstRender && salePlanRegisterDraftData) || [],
        setSalePlanRegisterDraftData,
      }}
    >
      {children}
    </SalePlanRegisterDraftContext.Provider>
  );
};
