'use client';
import { useState } from 'react';
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from '../MaterialTailwind';
import {
  ChevronDownIcon,
  PresentationChartBarIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@/components/MaterialTailwind';
import { useGetSaleObjectCategoryQuery } from '@/api/appService/saleObject/saleObjectCategoryApi';
import { SaleObjectCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectCategorySchema';
import { arrayToTree } from '@/utils/arrayToTree';

const SidebarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(0);

  const { data: saleObjectCategoryResponse, isFetching } =
    useGetSaleObjectCategoryQuery();

  const categoryTreeData = arrayToTree<SaleObjectCategoryType>(
    saleObjectCategoryResponse?.data?.data?.map((item) => ({
      ...item,
      master_id: item.master_id ?? null,
    })),
  );

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-40"
            onClick={toggleDrawer}
          >
            <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
              <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                  Sidebar
                </Typography>
              </div>
              <List>
                <Accordion
                  open={open === 1}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? 'rotate-180' : ''
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 1}>
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        Dashboard
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Analytics
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Reporting
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Projects
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 2 ? 'rotate-180' : ''
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        E-Commerce
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Orders
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Products
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
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
              </List>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default SidebarHeader;
