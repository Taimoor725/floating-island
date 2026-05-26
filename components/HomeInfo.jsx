import React from 'react'

function HomeInfo({currenStage}) {

  const renderContent ={
    1:(<div>
        1
    </div>),

     2:(<div>
        2
    </div>),
     3:(<div>
        3
    </div>),
     4:(<div>
        4
    </div>),
  }
  return renderContent[currenStage]
}

export default HomeInfo