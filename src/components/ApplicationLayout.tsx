import React from "react"

type Props = {
  children: React.ReactNode
}

const ApplicationLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="layouts-application">
      <div className="layouts-left" />
      <div className="layouts-main">
        {children}
      </div>
      <div className="layouts-right" />
    </div>
  )
}

export default ApplicationLayout;