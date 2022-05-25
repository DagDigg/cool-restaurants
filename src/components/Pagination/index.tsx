import { PaginationProps } from "react-instantsearch-hooks-web";
import { StyledPagination } from "./elements";

export function Pagination(props: PaginationProps) {
  return <StyledPagination {...props} />;
}
