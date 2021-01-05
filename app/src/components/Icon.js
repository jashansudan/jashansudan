import { Col, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import React from "react";

export default function Icon(props) {
  return (
    <Col className="m-auto">
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>{props.urlLink}</Tooltip>}
      >
        <a
          href={props.urlRedirect}
          style={{ display: "table-cell" }}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={props.imageSource} alt={props.altText} fluid />
        </a>
      </OverlayTrigger>
    </Col>
  );
}
