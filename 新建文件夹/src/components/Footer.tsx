import React from 'react';
import Link from "next/link";
import {NavList, Title} from "@/lib/constant";
import {Separator} from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className={'border-t mt-6'}>
      <div className={'container py-32 flex justify-between'}>
        <h2 className={'text-2xl'}>
          <Link href={'/'}>{Title}</Link>
        </h2>
        <div className={'flex grid-cols-3 gap-10'}>
          {
            NavList.map((item, index) => (
              <React.Fragment key={item.title}>
                {index !== 0 && <Separator orientation={'vertical'}/>}
                <div>
                  <span>{item.title}</span>
                  <ul className={'m-4 space-y-3'}>
                    {
                      item.list.map(item => <li key={item}>{item}</li>)
                    }
                  </ul>
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
