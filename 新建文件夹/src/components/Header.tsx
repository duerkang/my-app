import React from 'react';
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {MenuList, Title} from "@/lib/constant";

const Header = () => {
  return (
    <div className={'h-16 px-10 bg-white border-b'}>
      <div className={'container flex items-center justify-between h-full'}>
        <h1 className={'text-2xl'}>
          <Link href={'/'}>{Title}</Link>
        </h1>
        <div className={'flex items-center justify-end space-x-4 text-sm h-1/3'}>
          {MenuList.map(
            (item, index) => <React.Fragment key={item.text}>
              {index !== 0 && <Separator orientation={'vertical'}></Separator>}
              <Link href={item.href}>{item.text}</Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
