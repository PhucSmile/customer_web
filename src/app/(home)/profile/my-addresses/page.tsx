'use client';
import { useState } from 'react';
import { UpdateAddressModal } from '@/components/Modals/profile/addresses/UpdateAddressModal';
import {
  useDeleteUserAddressMutation,
  useGetUserAddressQuery,
  useUpdateUserAddressDefaultMutation,
} from '@/api/appService/userAddress/userAddressApi';
import { AddAddressModal } from '@/components/Modals/profile/addresses/AddAddressModal';
import { ConfirmDeleteModal } from '@/components/Modals/ConfirmDeleteModal';
import { Button } from '@/components/MaterialTailwind';
import AddLine from '@/components/SvgComponents/line/AddLine';

const MyAddresses = () => {
  const { data: userAddressData, refetch: refetchGetUserAddress } =
    useGetUserAddressQuery();
  const [selectedId, setSelectedId] = useState<string>('');

  const [isOpenAddAddressModal, setIsOpenAddAddressModalModal] =
    useState(false);
  const [isOpenUpdateAddressModal, setIsOpenUpdateAddressModalModal] =
    useState(false);
  const [isOpenDeleteAddressModal, setIsOpenDeleteAddressModalModal] =
    useState(false);

  const handleCloseAddAddressModalModal = () => {
    setIsOpenAddAddressModalModal(false);
  };

  const handleOpenAddAddressModalModal = () => {
    setIsOpenAddAddressModalModal(true);
  };

  const handleCloseUpdateAddressModal = () => {
    setIsOpenUpdateAddressModalModal(false);
    setSelectedId('');
  };

  const handleOpenUpdateAddressModal = (Id: string) => {
    setSelectedId(Id);
    setIsOpenUpdateAddressModalModal(true);
  };

  const handleCloseDeleteAddressModal = () => {
    setIsOpenDeleteAddressModalModal(false);
    setSelectedId('');
  };

  const handleOpenDeleteAddressModal = (Id: string) => {
    setSelectedId(Id);
    setIsOpenDeleteAddressModalModal(true);
  };

  const { mutateAsync } = useUpdateUserAddressDefaultMutation();

  const handleUpdateDefaultAddress = async (Id: string) => {
    await mutateAsync(Id);
    refetchGetUserAddress();
  };

  return (
    <>
      <h1 className="text-xl py-3">Địa chỉ của tôi</h1>
      <div className="w-full bg-white rounded-md">
        <div className="overflow-auto px-5">
          {userAddressData?.data?.data
            ?.sort((a, b) => (a?.is_default ? 0 : 1))
            ?.map(
              ({
                id,
                alias,
                person_name,
                phone,
                line1,
                ward_name,
                district_name,
                province_name,
                is_default,
              }) => (
                <div
                  key={id}
                  className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-underground"
                >
                  <div className="flexBetween gap-4">
                    <div className="flexBetween py-3">
                      <div className="">
                        <div className="flex justify-start gap-2">
                          <h1 className="font-semibold">
                            {person_name ?? alias}
                          </h1>
                          <div className="border-l"></div>
                          <p className="font-normal text-gray-600">{phone}</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm text-gray-600">{`${line1}`}</p>
                          <p className="text-sm text-gray-600">{`${ward_name}, ${district_name}, ${province_name}`}</p>
                        </div>
                        {is_default ? (
                          <span className="rounded-md bg-quaternary px-2 py-1 text-xs text-white">
                            Mặc định
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <div className="flex gap-5">
                      <Button
                        variant="text"
                        color="blue"
                        size="sm"
                        className="px-2 py-1 normal-case text-light-blue-800 hover:text-blue-600"
                        onClick={() => handleOpenUpdateAddressModal(id)}
                      >
                        Cập nhật
                      </Button>
                      <Button
                        variant="text"
                        color="red"
                        size="sm"
                        className="px-2 py-1 normal-case text-red-600 hover:text-red-700"
                        onClick={() => handleOpenDeleteAddressModal(id)}
                      >
                        Xóa
                      </Button>
                    </div>
                    <div>
                      {!is_default ? (
                        <Button
                          variant="text"
                          color="green"
                          size="sm"
                          className="px-2 py-1 normal-case text-primary hover:text-green-700"
                          onClick={() => handleUpdateDefaultAddress(id)}
                        >
                          Thiết lập mặc định
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              ),
            )}
        </div>
        <div className="mx-auto w-full px-2 border-b">
          <div
            className="flex cursor-pointer items-center justify-start gap-2 mx-auto"
            onClick={handleOpenAddAddressModalModal}
          >
            <AddLine className="text-primary w-8 h-8" />
            <div className="flexColStart py-3">
              <h1 className="font-semibold">Thêm địa chỉ</h1>
              <p className="text-sm">Thêm địa chỉ mà bạn muốn nhận hàng</p>
            </div>
          </div>
        </div>
      </div>
      <UpdateAddressModal
        isOpen={isOpenUpdateAddressModal}
        update_id={selectedId}
        onSuccess={refetchGetUserAddress}
        handleClose={handleCloseUpdateAddressModal}
      />
      <AddAddressModal
        isOpen={isOpenAddAddressModal}
        onSuccess={refetchGetUserAddress}
        handleClose={handleCloseAddAddressModalModal}
      />
      <ConfirmDeleteModal
        isOpen={isOpenDeleteAddressModal}
        handleClose={handleCloseDeleteAddressModal}
        useDeleteMutation={useDeleteUserAddressMutation}
        onSuccess={refetchGetUserAddress}
        delete_id={selectedId}
        title={'Xóa'}
        message="Bạn có muốn xóa địa chỉ này?"
      />
    </>
  );
};

export default MyAddresses;
