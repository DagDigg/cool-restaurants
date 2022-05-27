import algoliasearch from "algoliasearch";
import { ADMIN_API_KEY } from "../secrets";

export const searchClient = algoliasearch("MO1IKL9222", ADMIN_API_KEY);

export const index = searchClient.initIndex("interview_candidate");
