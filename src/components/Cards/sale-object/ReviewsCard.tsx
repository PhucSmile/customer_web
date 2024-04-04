import { Avatar, Progress, Rating } from '@/components/MaterialTailwind';
import { ReviewModal } from '@/components/Modals/sale-object/ReviewModal';
import PencilLine from '@/components/SvgComponents/line/PencilLine';
import StarSolid from '@/components/SvgComponents/solid/StarSolid';
import { CompactNumber } from '@/utils/numberUtils';
import { useState } from 'react';

const ReviewsCard = () => {
  const [isOpenReviewModal, setIsOpenReviewModal] = useState<boolean>(false);

  const handleCloseReviewModal = () => {
    setIsOpenReviewModal(false);
  };

  const handleOpenReviewModal = () => {
    setIsOpenReviewModal(true);
  };
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b pb-2">
        <div className="mx-auto flex-1">
          <div className="flexColCenter">
            <h1 className="font-bold whitespace-nowrap">Average rating</h1>
            <p className="font-bold text-5xl">4/5</p>
            <Rating value={4} readonly />
            <span className="text-sm text-textSecondary">
              &#40;{CompactNumber(5999)} đánh giá&#41;
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flexCenter gap-4">
            <div className="flexStart gap-2">
              <span className="whitespace-nowrap">5</span>
              <StarSolid className="w-5 h-5 text-yellow-700" />
            </div>
            <Progress color="gray" value={80} size="sm" />
            <span>{CompactNumber(2999)}</span>
          </div>
          <div className="flexCenter gap-4">
            <div className="flexStart gap-2">
              <span className="whitespace-nowrap">4</span>
              <StarSolid className="w-5 h-5 text-yellow-700" />
            </div>
            <Progress color="gray" value={80} size="sm" />
            <span>10</span>
          </div>
          <div className="flexCenter gap-4">
            <div className="flexStart gap-2">
              <span className="whitespace-nowrap">3</span>
              <StarSolid className="w-5 h-5 text-yellow-700" />
            </div>
            <Progress color="gray" value={80} size="sm" />
            <span>10</span>
          </div>
          <div className="flexCenter gap-4">
            <div className="flexStart gap-2">
              <span className="whitespace-nowrap">2</span>
              <StarSolid className="w-5 h-5 text-yellow-700" />
            </div>
            <Progress color="gray" value={45} size="sm" />
            <span>10</span>
          </div>
          <div className="flexCenter gap-4">
            <div className="flexStart gap-2">
              <span className="whitespace-nowrap">1</span>
              <StarSolid className="w-5 h-5 text-yellow-700" />
            </div>
            <Progress color="gray" value={10} size="sm" />
            <span>10</span>
          </div>
        </div>
        <div className="mx-auto">
          <button
            className="flexStart gap-2 p-2 w-fit hover:bg-blue-gray-300 hover:text-white transition-primary rounded-md cursor-pointer"
            onClick={handleOpenReviewModal}
          >
            <PencilLine className="w-6 h-6" />
            <span className="whitespace-nowrap">Write your review</span>
          </button>
        </div>
      </div>
      <div className="flexColStart">
        <div className="flexStart gap-10 items-start py-2">
          <div className="flexColCenter">
            <Avatar
              variant="circular"
              alt="vu phan"
              className="p-0.5 cursor-pointer w-12 h-12"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <h1 className="font-semibold text-sm">Vu Phan</h1>
            <span className="text-blue-gray-500 text-sm">20/06/2023</span>
          </div>
          <div>
            <Rating value={5} />
            <p>
              The sun slowly set over the horizon, painting the sky in vibrant
              hues of orange and pink.
            </p>
          </div>
        </div>
        <div className="flexStart gap-10 items-start py-2">
          <div className="flexColCenter">
            <Avatar
              variant="circular"
              alt="vu phan"
              className="p-0.5 cursor-pointer w-12 h-12"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <h1 className="font-semibold text-sm">Vu Phan</h1>
            <span className="text-blue-gray-500 text-sm">20/06/2023</span>
          </div>
          <div>
            <Rating value={5} />
            <p>
              The sun slowly set over the horizon, painting the sky in vibrant
              hues of orange and pink.
            </p>
          </div>
        </div>{' '}
        <div className="flexStart gap-10 items-start py-2">
          <div className="flexColCenter">
            <Avatar
              variant="circular"
              alt="vu phan"
              className="p-0.5 cursor-pointer w-12 h-12"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <h1 className="font-semibold text-sm">Vu Phan</h1>
            <span className="text-blue-gray-500 text-sm">20/06/2023</span>
          </div>
          <div>
            <Rating value={5} />
            <p>
              The sun slowly set over the horizon, painting the sky in vibrant
              hues of orange and pink.
            </p>
          </div>
        </div>
      </div>
      <ReviewModal
        isOpen={isOpenReviewModal}
        handleClose={handleCloseReviewModal}
      />
    </div>
  );
};

export default ReviewsCard;
