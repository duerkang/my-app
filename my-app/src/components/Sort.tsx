'use client'
import React from 'react';
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {SortValue} from "@/types/global";
import {SortList, SortTitle} from "@/lib/constant";

const Sort = () => {
  const handleValueChange = (value: SortValue) => {
    console.log(value)
  }
  return (
    <div className={'w-64   py-4'}>
      <p className={'m-5 text-xl'}>{SortTitle}</p>
      <ToggleGroup className={'flex-col gap-3  '} type={'single'} defaultValue={'latest'}
                   onValueChange={handleValueChange}>
        {
          SortList.map((item, index) => <React.Fragment key={index}>
              <ToggleGroupItem value={item.value}>{item.text}</ToggleGroupItem>
            </React.Fragment>
          )
        }
      </ToggleGroup>
    </div>
  );
};

export default Sort;
