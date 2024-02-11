import { useEffect, useState } from "react";

import { format } from "date-fns";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { Controller, useForm } from "react-hook-form";

import { Breadcrumbs } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Textarea,
} from "@material-tailwind/react";

import API_HANDLER from "../apis";
import { SelectComponent } from "../components";
import { Status } from "../constant";
import DatePickerComponent from "../components/DatePickerComponent";
export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    taskAssociatedWith: "test",
  });
  const submitDetails = (data) => {
    API_HANDLER.addMyTask(data).then((res) => console.log(res));
    console.log("submitDetails called.", data);
  };
  const [date, setDate] = useState();
  const [associatedList, setAssociatedList] = useState([]);
  const [taskTypeList, setTaskTypeList] = useState([]);

  useEffect(() => {
    Promise.allSettled([
      API_HANDLER.getTaskAssociatedWithList(),
      API_HANDLER.getTasksTypeList(),
      API_HANDLER.addMyTask(),
    ])
      .then((result) => {
        const [associates, tasks] = result;
        if (associates.status === Status.Fulfilled) {
          setAssociatedList(associates.value);
        } else {
          console.log(associates.reason);
        }

        if (tasks.status === Status.Fulfilled) {
          setTaskTypeList(tasks.value);
        } else {
          console.log(tasks.reason.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-full flex items-center">
      <div className="w-full mx-auto">
        <div className="lg:w-5/6 w-full mx-auto p-6">
          <div className="row-1-heading py-3">
            <Breadcrumbs className="px-0">
              <Link to="#">Home</Link>
              <Link to="/dashboard" className="opacity-60">
                Dashboard
              </Link>
            </Breadcrumbs>
          </div>

          <div className="bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
            <form
              className="mt-4 lg:m-6 lg:p-6 p-3"
              onSubmit={handleSubmit(submitDetails)}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="left grid lg:grid-rows-4 gap-6">
                  <div className="row-1 row-span-1 w-full">
                    <Input
                      label="Title"
                      color={errors.title ? "red" : "blue"}
                      size="lg"
                      {...register("title", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </div>
                  <div className="row-2 row-span-3">
                    <Textarea
                      size="lg"
                      label="Description"
                      {...register("description", {
                        required: true,
                        maxLength: 300,
                      })}
                      color={errors.description ? "red" : "blue"}
                    />
                  </div>
                </div>
                <div className="right grid grid-rows-4 gap-6">
                  <div className="row-1">
                    <Controller
                      name="AssociateId"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <SelectComponent
                          field={field}
                          data={associatedList}
                          label="Associated With"
                          isValid={errors.AssociateId ? true : false}
                        />
                      )}
                    />
                  </div>
                  {/* <div className="row-2">
                    <Controller
                      name="dateToday"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => {
                        <DatePickerComponent {...field} date={date} />;
                        // <Popover placement="bottom">
                        //   <PopoverHandler>
                        //     <Input
                        //       label="Start Date"
                        //       size="lg"
                        //       onChange={() => null}
                        //       value={date ? format(date, "P") : ""}
                        //     />
                        //   </PopoverHandler>
                        //   <PopoverContent {...field}>
                        //     <DayPicker
                        //       mode="single"
                        //       selected={date}
                        //       onSelect={setDate}
                        //       showOutsideDays
                        //       className="border-0"
                        //       classNames={{
                        //         caption:
                        //           "flex justify-center py-2 mb-4 relative items-center",
                        //         caption_label:
                        //           "text-sm font-medium text-gray-900",
                        //         nav: "flex items-center",
                        //         nav_button:
                        //           "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        //         nav_button_previous: "absolute left-1.5",
                        //         nav_button_next: "absolute right-1.5",
                        //         table: "w-full border-collapse",
                        //         head_row: "flex font-medium text-gray-900",
                        //         head_cell: "m-0.5 w-9 font-normal text-sm",
                        //         row: "flex w-full mt-2",
                        //         cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        //         day: "h-9 w-9 p-0 font-normal",
                        //         day_range_end: "day-range-end",
                        //         day_selected:
                        //           "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        //         day_today:
                        //           "rounded-md bg-gray-200 text-gray-900",
                        //         day_outside:
                        //           "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        //         day_disabled: "text-gray-500 opacity-50",
                        //         day_hidden: "invisible",
                        //       }}
                        //       components={{
                        //         IconLeft: ({ ...props }) => (
                        //           <ChevronLeftIcon
                        //             {...props}
                        //             className="h-4 w-4 stroke-2"
                        //           />
                        //         ),
                        //         IconRight: ({ ...props }) => (
                        //           <ChevronRightIcon
                        //             {...props}
                        //             className="h-4 w-4 stroke-2"
                        //           />
                        //         ),
                        //       }}
                        //     />
                        //   </PopoverContent>
                        // </Popover>;
                      }}
                    />
                  </div> */}
                  <div className="row-3">
                    <Controller
                      name="taskType"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <SelectComponent
                          field={field}
                          data={taskTypeList}
                          label="Type"
                          isValid={errors.taskType ? true : false}
                        />
                      )}
                    />
                  </div>
                  <div className="row-4">
                    <Input
                      label="Time Taken (in hrs)"
                      type="number"
                      min={1}
                      max={100}
                      color={errors.TimeTaken ? "red" : "blue"}
                      size="lg"
                      {...register("timeTaken", {
                        required: true,
                        onBlur: (e) =>
                          setValue("timeTaken", parseInt(e.target.value)),
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full lg:w-1/5">
                <Button
                  type="submit"
                  variant="filled"
                  size="lg"
                  color="blue"
                  loading={false}
                  className="flex items-center gap-3 w-full justify-center"
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
