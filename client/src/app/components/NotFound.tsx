import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-xl p-6 bg-white rounded-lg shadow-xl">
                <div className="flex  felx-col sm:flex-row items-center justify-center mb-4">
                    <div className="error-box relative w-16 h-16 p-2">
                        <div className="error-box__face front">4</div>
                        <div className="error-box__face back">0</div>
                        <div className="error-box__face right">4</div>
                        <div className="error-box__face left">0</div>
                        <div className="error-box__face top">0</div>
                        <div className="error-box__face bottom">0</div>
                    </div>

                </div>
                <div className="mt-5">
                    <h2 className="text-3xl font-semibold">Oops, Page not found!</h2>
                </div>
                <p className="">
                    The page you were looking for couldn&apos;t be found. It might have been
                    moved, renamed, or simply doesn&apos;t exist. We apologize for any
                    inconvenience this may have caused.
                </p>
                <div className="button">
                    <Link href={"/"} className="button-rounded btn-bor">
                        Back to Happiness
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
