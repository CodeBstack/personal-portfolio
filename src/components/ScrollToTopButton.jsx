import { ArrowUpwardOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener("scroll", handleScrollButtonVisibility);

        return () => {
            window.removeEventListener("scroll", handleScrollButtonVisibility);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <Tooltip title="Scroll to Top" placement="left">
                    <div className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-16 bg-grey_60 md:right-7">
                        <IconButton
                            onClick={handleScrollToTop}
                            sx={{ width: "100%", height: "100%", borderRadius: "16px" }}
                        >
                            <ArrowUpwardOutlined fontSize="medium" color="primary" />
                        </IconButton>
                    </div>
                </Tooltip>
            )}
        </>
    );
}

export default ScrollToTopButton;
