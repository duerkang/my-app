import React from 'react';
import Sort from "@/components/Sort";

async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {next: {tags: ["collection"]}});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

const Page = async () => {
  const data = await getData()
  return (
    <div className={'container'}>
      <Sort/>
      <img src={data[0].url} width={300} alt={''}/>
    </div>
  );
};

export default Page;

