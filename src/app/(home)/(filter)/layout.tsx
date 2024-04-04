'use client';
import SidebarFilter from '@/components/Sidebar/sidebar-filter/SidebarFilter';
import React, { ReactNode } from 'react';

const FilterLayout = ({ children }: { children: ReactNode }) => {
  const handlePriceFilterChange = (minPrice: number, maxPrice: number) => {
    // Handle price filter change
    console.log('Price filter:', minPrice, maxPrice);
  };

  const handleSizeFilterChange = (size: string) => {
    // Handle size filter change
    console.log('Size filter:', size);
  };
  return (
    <div className="container mx-auto flex">
      {/* <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List> */}
      {/* <SidebarFilter /> */}
      <SidebarFilter
        onPriceFilterChange={handlePriceFilterChange}
        onSizeFilterChange={handleSizeFilterChange}
      />
      <div className="mx-2">{children}</div>
    </div>
  );
};

export default FilterLayout;
