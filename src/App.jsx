import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import {
  CrewLayout,
  DestinationLayout,
  RouteLayout,
  TechnoLayout,
} from "./layouts"
import { Home, NotFount } from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />

      <Route path="destination" element={<DestinationLayout />}></Route>

      <Route path="crew" element={<CrewLayout />}></Route>

      <Route path="technology" element={<TechnoLayout />}></Route>

      <Route path="*" element={<NotFount />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
