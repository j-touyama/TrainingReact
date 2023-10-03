import {usePullDown, usePullDownDispatch } from "../context/UserContext"

const TargetDisplay = () => {

    const checkbox = usePullDown()
    const setCheckbox = usePullDownDispatch()

    const changeDispType = (e) => {
        const newCheckBoxes = checkbox.map(type => {
          const newType = {...type}
          if (newType.name === e.target.value) {
            newType.dispFlg = !type.dispFlg
          }
          return newType
        })
        setCheckbox(newCheckBoxes)
      }

    return (
        <>
            ・表示対象<br/>
            {
                checkbox.map(type => {
                    return (
                        <label key={type.key}>
                            <input type="checkbox" value={type.name} onChange={changeDispType} checked={type.dispFlg}/>{type.name}
                        </label>
                    )
                })
            }
        </>
    )
}

export default TargetDisplay