import React, { useState } from 'react';
import {
  Button,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '../MaterialTailwind';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import { useGetSaleObjectCategoryQuery } from '@/api/appService/saleObject/saleObjectCategoryApi';
import ChevronDownLine from '../SvgComponents/line/ChevronDownLine';
import { SaleObjectCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectCategorySchema';
import { arrayToTree } from '@/utils/arrayToTree';
import { BaseTreeType } from '@/schemas/BaseSchema';
import Link from 'next/link';

export default function NestedMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { data: saleObjectCategoryResponse, isFetching } =
    useGetSaleObjectCategoryQuery();

  const categoryTreeData = arrayToTree<SaleObjectCategoryType>(
    saleObjectCategoryResponse?.data?.data?.map((item) => ({
      ...item,
      master_id: item.master_id ?? null,
    })),
  );

  const renderNestedMenu = (
    categoryTreeData: BaseTreeType<SaleObjectCategoryType>[],
  ) => {
    return categoryTreeData?.map((parent, index) => {
      if (parent?.children && parent?.children.length > 0) {
        return (
          <Menu key={parent?.id} placement="right" offset={15}>
            <MenuHandler>
              <MenuItem className="hover:text-primary whitespace-nowrap">
                <div className="flexBetween gap-2">
                  {parent?.name}
                  <ChevronForwardLine className="w-4 h-4" />
                </div>
              </MenuItem>
            </MenuHandler>
            <MenuList className="gap-3 rounded-lg w-fit">
              {renderNestedMenu(parent?.children)}
            </MenuList>
          </Menu>
        );
      } else
        return (
          <Link key={parent.id} href={'/category'}>
            <MenuItem className="hover:text-primary whitespace-nowrap">
              {parent?.name}
            </MenuItem>
          </Link>
        );
    });
  };

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography as="div" variant="small" className="font-normal">
          <ListItem
            className="flex items-center gap-2 relative py-2 pr-2 hover:text-primary"
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            <Typography
              variant="h6"
              className="font-semibold whitespace-nowrap"
            >
              Danh mục
            </Typography>
            <ChevronDownLine
              strokeWidth={2.5}
              className={`hidden h-4 w-4 transition-transform lg:block ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
            <ChevronDownLine
              strokeWidth={2.5}
              className={`block h-4 w-4 transition-transform lg:hidden ${
                isMobileMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList>{renderNestedMenu(categoryTreeData ?? '')}</MenuList>
    </Menu>
  );
}
