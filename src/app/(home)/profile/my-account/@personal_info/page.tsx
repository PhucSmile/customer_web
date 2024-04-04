'use client';
import Image from 'next/image';
import { Button } from '@/components/MaterialTailwind';
import CameraLine from '@/components/SvgComponents/line/CameraLine';

const PersonalInfo = () => {
  return (
    <>
      <h1 className="font-medium text-textSecondary">Thông tin cá nhân</h1>
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-36 h-36 rounded-full relative overflow-hidden group/test items-center align-middle ">
          <Image
            src={`/img/plans/plan2.png`}
            alt=""
            fill
            className="absolute"
          />
          <button
            onClick={() => {}}
            className="absolute cursor-pointer inset-0 bg-black bg-opacity-0 hidden group-hover/test:block hover:bg-opacity-50 align-middle items-center justify-center "
          >
            <CameraLine className="absolute w-8 h-8 z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover/test:block" />
          </button>
        </div>
        <div className="grow flex flex-col gap-2">
          <div className="flexBetween">
            <span>Họ & Tên</span>
            <input
              type="text"
              placeholder="Họ và tên"
              className="border rounded-md w-3/5 px-4 "
            />
          </div>
          <div className="flexBetween">
            <span>Nickname</span>
            <input
              type="text"
              placeholder="Nickname"
              className="border rounded-md w-3/5 px-4 "
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          color="green"
          size="sm"
          className="btn-primary normal-case bg-primary mx-auto"
        >
          Lưu thay đổi
        </Button>
      </div>
    </>
  );
};

export default PersonalInfo;
