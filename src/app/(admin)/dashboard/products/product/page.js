"use client";
import { useState, useTransition } from "react";
import PageTopBar from "../../components/partials/header/PageTopBar";
import Drawer from "../../components/ui/Drawer";
import useDrawerOpenClose from "@/hooks/useDrawerOpen";

const ProductPage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Add Product"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        some text
      </Drawer>
      <PageTopBar buttonTitle={"Create Product"} onClick={handleDrawerOpen} />
    </div>
  );
};

export default ProductPage;
