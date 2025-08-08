
import './rightHalf.scss'

const RightHalf = () => {
  return (
    <div className='right-container'>
      <div className="header">
        <h1><span className='my'>My</span> <span>PlayGround</span></h1>
      <button className='add-folder'>
        <span className="material-symbols-outlined">add</span>
        <span>New Folder</span>
      </button>
      </div>

      <div className='folder-container'>
        <div className='folder-header'>
          <div className='folder-header-item'>
            <span className="material-symbols-outlined folder-icon">folder</span>
            <span>{"DSA"}</span>
          </div>
          <div className='folder-header-item'>
            <span className="material-symbols-outlined">delete</span>
            <span className="material-symbols-outlined">edit</span>
            <button>
              <span className="material-symbols-outlined">add</span>
              <span>New PlayGround</span>
            </button>
          </div>
        </div>
        <div className='cards-container'>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
        </div>
      </div>

      <div className='folder-container'>
        <div className='folder-header'>
          <div className='folder-header-item'>
            <span className="material-symbols-outlined folder-icon">folder</span>
            <span>{"Full"}</span>
          </div>
          <div className='folder-header-item'>
            <span className="material-symbols-outlined">delete</span>
            <span className="material-symbols-outlined">edit</span>
            <button>
              <span className="material-symbols-outlined">add</span>
              <span>New PlayGround</span>
            </button>
          </div>
        </div>
        <div className='cards-container'>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
          <div className="card">
              <img src="logo/logo.png" alt="logo" className='logo'/>
              <div className='title-container'>
                <span>{"Heap Implementation"}</span>
                <span>Language: {"JAVA"}</span>
              </div>
              <div style={{display:"flex",gap: "10px"}}>
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined">edit</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightHalf
