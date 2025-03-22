import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Content sections data
const sections = {
  introduction: {
    title: "Giới thiệu",
    content:
      "Ứng dụng quản lý kho hàng giúp doanh nghiệp theo dõi lượng hàng tồn kho, nhập - xuất kho và quản lý các giao dịch liên quan. Hệ thống hỗ trợ nhiều người dùng với các vai trò khác nhau, cung cấp báo cáo chi tiết về tình trạng kho, giúp tối ưu hóa hoạt động kinh doanh.",
  },
  objectives: {
    title: "Mục tiêu",
    content:
      "Ứng dụng quản lý kho hàng giúp doanh nghiệp theo dõi lượng hàng tồn kho, nhập - xuất kho và quản lý các giao dịch liên quan. Hệ thống hỗ trợ nhiều người dùng với các vai trò khác nhau, cung cấp báo cáo chi tiết về tình trạng kho, giúp tối ưu hóa hoạt động kinh doanh.",
  },
  products: {
    title: "Sản phẩm",
    buttonText: "My project",
  },
};

export const Project = (): JSX.Element => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Introduction Section */}
      <section className="w-full mt-[186px]">
        <Card className="w-full bg-[#f1f1ff] rounded-[0px_30px_30px_0px] border border-solid border-[#e7daec]">
          <CardContent className="p-0">
            <div className="text-center pt-[27px]">
              <h2 className="font-headings-headings-h2 font-[number:var(--headings-headings-h2-font-weight)] text-graygray-900 text-[length:var(--headings-headings-h2-font-size)] tracking-[var(--headings-headings-h2-letter-spacing)] leading-[var(--headings-headings-h2-line-height)]">
                {sections.introduction.title}
              </h2>
            </div>

            <div className="px-[197px] pt-[70px] pb-[97px]">
              <p className="[font-family:'Inter',Helvetica] font-normal text-graysblack text-2xl tracking-[0] leading-9">
                {sections.introduction.content}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Objectives Section */}
      <section className="w-full flex mt-[40px]">
        <div className="w-1/2 pl-[89px]">
          <img
            className="w-[580px] h-[459px] object-cover"
            alt="Warehouse management system"
            src="/image-2.png"
          />
        </div>

        <div className="w-1/2 pr-[50px]">
          <h2 className="font-headings-headings-h2 font-[number:var(--headings-headings-h2-font-weight)] text-graygray-900 text-[length:var(--headings-headings-h2-font-size)] tracking-[var(--headings-headings-h2-letter-spacing)] leading-[var(--headings-headings-h2-line-height)] whitespace-nowrap mb-[73px]">
            {sections.objectives.title}
          </h2>

          <p className="font-paragraphs-default-lg font-[number:var(--paragraphs-default-lg-font-weight)] text-graysblack text-[length:var(--paragraphs-default-lg-font-size)] tracking-[var(--paragraphs-default-lg-letter-spacing)] leading-[var(--paragraphs-default-lg-line-height)]">
            {sections.objectives.content}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full mt-[100px]">
        <Card className="w-full h-[276px] bg-[#f0fff7] rounded-[0px_30px_30px_0px] border border-solid border-[#e7daec]">
          <CardContent className="p-0 flex items-center justify-between">
            <div className="pl-[197px]">
              <h2 className="font-headings-headings-h2 font-[number:var(--headings-headings-h2-font-weight)] text-graygray-900 text-[length:var(--headings-headings-h2-font-size)] tracking-[var(--headings-headings-h2-letter-spacing)] leading-[var(--headings-headings-h2-line-height)] whitespace-nowrap">
                {sections.products.title}
              </h2>
            </div>

            <div className="pr-[167px]">
              <Button className="w-[482px] h-[75px] bg-[#3d63e9] rounded-[5px] shadow-btn-shadow">
                <span className="[font-family:'Inter',Helvetica] font-bold text-graygray-50 text-4xl tracking-[0] leading-[14px] whitespace-nowrap">
                  {sections.products.buttonText}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};