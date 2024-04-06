import React from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { Footer } from "./Footer";
import '../../App.css'

export const FigmaTest2 = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div style={{zIndex: 1}} className="row row-cols-1 row-cols-md-3 g-4 mt-2 position-relative">
          {[...Array(12)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        <div className="text-center pagination d-flex justify-content-center align-items-center">
          <span className="fs-4 fw-bold me-2">«</span>
          <div className="fs-5 fw-bold d-flex gap-3 align-items-center">
          <span className="test3_circle">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          </div>
          <span className="fs-4 fw-bold ms-2">»</span>
        </div>
      </div>
      <Footer />
    </>
  );
};
