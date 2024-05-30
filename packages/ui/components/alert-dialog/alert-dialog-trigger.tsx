'use client';

import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@repo/utils";  

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Trigger
    ref={ref}
    className={cn("p-4 border", className)}
    {...props}
  />
)); 
AlertDialogTrigger.displayName = AlertDialogPrimitive.Trigger.displayName;