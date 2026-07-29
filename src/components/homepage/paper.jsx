import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Paper = (props) => {
    const { title, description, category, link } = props;

    return (
        <React.Fragment>
            <div className="homepage-article">
                <div className="homepage-article-content">
                    <div className="homepage-article-date">
                        |&nbsp;&nbsp;&nbsp;{category}
                    </div>
                    <div className="homepage-article-title">{title}</div>
                    <div className="homepage-article-description">
                        {description}
                    </div>
                    <div className="homepage-article-link">
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                textDecoration: "none",
                                color: "inherit",
                                fontWeight: "bold"
                            }}
                        >
                            Read paper{" "}
                            <FontAwesomeIcon
                                style={{ fontSize: "14px", color: "#e2574c" }}
                                icon={faFilePdf}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Paper;
