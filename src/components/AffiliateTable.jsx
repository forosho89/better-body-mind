import React from "react";
import AffiliateLink from "./AffiliateLink";
import { amazonSearchLink } from "../utils/amazonLink";

export default function AffiliateTable({ title, products }) {
  return (
    <div className="affiliate-table-wrapper">
      <h2>{title}</h2>

      <table className="affiliate-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Best For</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.bestFor}</td>
              <td>⭐ {item.rating}</td>
              <td>
                <AffiliateLink
                  href={amazonSearchLink(item.keyword)}
                  className="affiliate-btn"
                >
                  Check Price
                </AffiliateLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
