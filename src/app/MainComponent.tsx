"use client";

import React, { useEffect } from "react";
import Layout from "@/app/components/Layout";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux-store/store";
import "react-toastify/dist/ReactToastify.css";
import { fetchLayoutRoutes } from "./bbw_apis/redux-store/actions/generalActions";
import Loader from "./components/Loader";
import { RootState } from "./interface";



export default function MainComponent({ loading, children }: { loading: boolean; children: React.ReactNode }) {

    const layOutProps = useSelector((state: RootState) => state.api.models.layoutRoutes || {});
    const layOutLoadingStatus = useSelector((state: RootState) => state.api.status.layoutRoutes || {});
  
    const dispatch = useDispatch<AppDispatch>();    
    useEffect(() => {
      const fetchData = async () => {
        // setLoading(true);
        try {
          await fetchLayoutRoutes(dispatch);
        } catch (error) {
          // Optionally, show an error message here
          console.error("Failed to fetch shop data:", error);
        } finally {
          // setLoading(false);
        }
      };
      fetchData();
    }, [dispatch]);
  
  
    return (
      <>
        <Loader show={loading || layOutLoadingStatus?.loading} />
        <div
          className={`transition-opacity duration-500 ${loading
            ? "opacity-50 pointer-events-none blur-md select-none"
            : "opacity-100"
            }`}
        >
          <ToastContainer position="top-right" autoClose={3000} />
          {
            layOutLoadingStatus.success &&
            <Layout layOutProps={layOutProps}>
              <main className="pt-1">{children}</main>
            </Layout>
          }
        </div>
      </>
    )
  }
