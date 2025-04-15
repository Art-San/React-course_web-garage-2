import { BasicExample } from './components/BasicExample'
import { FilterExample } from './components/FilterExample'
import { SlowRenderExample } from './components/SlowRenderExample'
import { SyncTabExample } from './components/SyncTabExapmle'
import { TabExample } from './components/TabExample'

const App = () => {
  return (
    <>
      <div className=" m-10 flex flex-col gap-10 items-center">
        <BasicExample />
        {/* <SlowRenderExample /> */}
        {/* <FilterExample /> */}
        {/* <TabExample /> */}
        <SyncTabExample />
      </div>
    </>
  )
}

export default App
