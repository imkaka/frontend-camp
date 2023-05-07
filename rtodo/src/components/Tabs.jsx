/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
export default function Tabs({currentTab, setCurrentTab}) {
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    }

    return (
        <div className="tabs">
            <button disabled={currentTab === "all"} onClick={(e) => handleTabChange('all')}>All</button>
            <button disabled={currentTab === "active"} onClick={(e) => handleTabChange('active')}>Active</button>
            <button disabled={currentTab === "completed"} onClick={(e) => handleTabChange('completed')}>Completed</button>
        </div>
    )
}
