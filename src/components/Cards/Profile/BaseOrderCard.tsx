import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from '@/components/MaterialTailwind';
import { BaseOrderCardPropsType } from '@/types/BaseCardPropsType';
import { FC } from 'react';

export const BaseOrderCard: FC<BaseOrderCardPropsType> = ({
  //   onViewButtonClick,
  children,
  cardHeader,
  cardFooter,
  isLoading = false,
  cardClassName,
  cardHeaderClassName,
  cardTitleClassName,
  cardBodyClassName,
  cardFooterClassName,
}) => (
  <Card className={`${cardClassName} rounded-sm`}>
    <CardHeader
      shadow={false}
      floated={false}
      className={`${cardHeaderClassName} border-b`}
    >
      {cardHeader}
    </CardHeader>
    <CardBody className={`${cardBodyClassName}`}>{children}</CardBody>
    <CardFooter className={`${cardFooterClassName} py-1 border-t`}>
      {cardFooter}
    </CardFooter>
  </Card>
);
