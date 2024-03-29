import { axiosReq } from "../api/axiosDefaults";

// Function to fetch more data
export const fetchMoreData = async (resource, setResource) => {
  try {
    // Send a GET request to fetch more data using axios
    const { data } = await axiosReq.get(resource.next);
    // Update the resource state with the new data
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        // Ensure that there are no duplicate results by checking the IDs
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// Function to handle following actions
export const followHelper = (profile, clickedProfile, following_id) => {
  const { id, is_owner, followers_count, following_count } = profile;

  // Check if the profile being interacted with is the clicked profile
  return id === clickedProfile.id
    ? // If yes, update followers count and following ID
      { ...profile, followers_count: followers_count + 1, following_id }
    : // If it's the profile of the logged-in user, update following count
      is_owner
      ? { ...profile, following_count: following_count + 1 }
      : // Otherwise, return the profile unchanged
        profile;
};
