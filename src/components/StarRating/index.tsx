import { StarEmpty, StarFill, StarHalf } from "./elements";

export function StarRating({ count }: { count: number }) {
  const stars = getStars(count);

  return (
    <div style={{ display: "flex" }}>
      {Array(stars.filled)
        .fill(null)
        .map((_, i) => (
          <StarFill key={"fill_" + i} />
        ))}
      {Array(stars.half)
        .fill(null)
        .map((_, i) => (
          <StarHalf key={"half_" + i} />
        ))}
      {Array(stars.empty)
        .fill(null)
        .map((_, i) => (
          <StarEmpty key={"empty_" + i} />
        ))}
    </div>
  );
}

/**
 * Converts a rating count to a data structure that can be
 * used to represent UI stars
 * Eg:
 * 5.0, 4.9, 4.8, 4.7, 4.6  -> 5 stars
 * 4.5, 4.4                 -> 4 and a half stars
 * 4.3, 4.2, 4.1            -> 4 stars
 *
 * @param count Rating count
 * @returns Data structure representing a star rating
 */
function getStars(count: number) {
  if (Number.isInteger(count)) {
    return {
      filled: count,
      empty: 5 - count,
      half: 0,
    };
  }

  const decimal = count - Math.floor(count);

  if (decimal >= 0.6) {
    return {
      filled: Math.ceil(count),
      half: 0,
      empty: 5 - Math.ceil(count),
    };
  }
  if (decimal >= 0.4) {
    return {
      filled: Math.floor(count),
      half: 1,
      empty: 4 - Math.floor(count),
    };
  }

  return {
    filled: Math.floor(count),
    half: 0,
    empty: 5 - Math.floor(count),
  };
}
