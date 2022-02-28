## `Reddit Post Client`

### v0.1.7-dev

- [FIX] Inside scroll issue on DrawerSideBar fixed @christianmotta
- [ENH] Buttons focus style enhanced @christianmotta
- [FIX] SideBar menu button zIndex issue fixed @christianmotta
- [ENH] Dismiss button added to PostReview @christianmotta
- [ENH] Loading spinner added to Show More button @christianmotta
- [FIX] Dismiss button alignment issue fixed @christianmotta

### v0.1.6

> The application is deployed with Vercel. I only had to add @types/node and the deployment process was successful.
>
> I will be checking for some small code improvements and I think the exercise is complete.

- [CHG] Readme file updated with demo information @christianmotta
- [NEW] Added @types/node (required for deployment) @christianmotta

### v0.1.5

> In the current version I added testing to the application. For that purpose I added Vitest, that is the native test framework for Vite projects, and I also added React Test Library, that is the library that I usually use to make integration / render tests.
>
> I created a basic mock and some wrappers, to allow me to test components that need to be connected to the Redux store and to Chakra theme provider.
>
> Finally I added a render test for each component, to make sure that the component is rendering correctly. This is just a first approach to make an integration test, and I may improve it in the future if I have the time, by adding async tests for checking the state of the application, and also fire some click events for checking the application response.

- [NEW] Render tests added for all components @christianmotta
- [NEW] Testing mocks and wrappers created @christianmotta
- [NEW] Adding testing dependencies and some settings @christianmotta

### v0.1.4

> In this version, I just added the transitions, an some other minor changes. I used Framer Motion to do it.
>
> In PostDetail component I used the 'forwardRef' method included in Framer lib, in order to create a hybrid component keeping Chakra functionalities.
>
> I'm creating a new version with just this changes because the UI seems to be complete. So I'm going to start with the testing and deployment, and after that I'll make a code review.

- [NEW] Readme file added @christianmotta
- [ENH] Fade in transition added to Post and PostReview component @christianmotta
- [ENH] Fade out transition added to Post component using Framer @christianmotta

### v0.1.3

> In this version, all the requested functionalities are implemented: Post Dismiss, Dismiss All, Show All and Read/Unread state indicator.
>
> I just had to deal with default opened post in order to consider it as read. For that reason, I added a map in two of the actions in the reducer. I could have left no default post to make it easier buy I like how the app looks with that. I'll try to improve this if I have the time.

- [NEW] Unread status added to Post component and reducer @christianmotta
- [NEW] Dismiss all posts functionality added to PostList component @christianmotta
- [NEW] Dismiss functionality added to Post component @christianmotta
- [NEW] Show more functionality added @christianmotta
- [ENH] Image external link added @christianmotta

### v0.1.2

> I created basic types for all the elements I thought it will be needed.
>
> Then I started working with Redux. I created the store, actions and a main reducer. I started with the fetching data actions in order to replace mock data with real one.
>
> I created a custom hook to fetch data from the API. I usually put the actual fetch line in a separate file but been like this project has one only fetch, I left it there for now. The hook updates the store directly with the new data, so it will be useful for "show more" functionality in the future. I used Luxon to format the date because it makes easy to handle relative time and localization.
>
> I spent some time working with the post list component, in order to improve styling, scrolling and some behaviors. I also added a skeleton component to show the loading state and also a no-thumbnail placeholder.
>
> I started working with the post detail component, receiving the data from the store. I improved the styling and also added an empty detail to handle non-selected state.
>
> I invested some time working with the detail image, regarding the different situations that the API provides (image/no-image, thumbnail/no-thumbnail), in order to show the best possible image in the best possible way, and not to leave the detail almost empty.

- [ENH] UseFetchPost updated to prevent wrong image urls @christianmotta
- [NEW] NoImageContainer created to handle non-image posts @christianmotta
- [NEW] ImageContainer created to handle different image sizes @christianmotta
- [NEW] EmptyPostDetail created to handle non-selected state @christianmotta
- [ENH] PostDetail receiving data from the hook @christianmotta
- [ENH] Selected post behavior added to list @christianmotta
- [ENH] PostSkeleton created for loading state @christianmotta
- [NEW] PostsList receiving data from the hook @christianmotta
- [NEW] Custom hook created for handling data fetching @christianmotta
- [NEW] Creating Redux store and actions @christianmotta
- [NEW] Creating types that will be needed @christianmotta

### v0.1.1

> I started by creating a React project with ViteJS. I prefer to use ViteJS because it is a lot faster and lighter than CRA. I considered using NextJS but it seems to be too much for a single page project like this.
>
> After that I added the dependencies I thought would be needed, cleaned up the ViteJS default code and created a basic folder setup.
>
> Then I created a standard layout for the app. I decided to use ChakraUI because it's easy to implement, it's agnostic to any design system and it has a nice drawer component, that will be useful for the mobile menu.

- [NEW] Layout ready @christianmotta
- [ENH] Some layout fixes @christianmotta
- [NEW] PostDetail layout @christianmotta
- [NEW] PostList and Post components layout @christianmotta
- [NEW] Creating a responsive layout using ChakraUI @christianmotta
- [NEW] Setting up basic structure and libraries @christianmotta
- [CHG] Project cleaned up @christianmotta
- [NEW] Setting up project with Vite @christianmotta
