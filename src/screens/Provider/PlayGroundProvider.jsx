import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { v4 } from 'uuid';

export const PlayGroundContext = createContext();

//Intial Some folder
const initialData=[
  {
    id:v4(),
    title: 'DSA',
    files: [
      {
      id: v4(),
      title: 'index',
      code: `cout<<"Hello world";`,
      language: "cpp"
      }
    ]
  },
  {
    id:v4(),
    title: 'Frontend',
    files: [
      {
      id: v4(),
      title: 'test',
      code: `console.log("Hello world");`,
      language: "JavaScript",
      }
    ]
  },
];

const PlayGroundProvider = ({children}) => {
  const [folders,setFolders] = useState(()=>{
    if(!localStorage.getItem('data')){
      return initialData;
    }else{
      return JSON.parse(localStorage.getItem('data'));
    }
  });

  useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(folders));
  },[])

  const defaultCode = {
    ['javascript']:  `console.log("Hello World");`,
    ['python']: `print("Hello World")`,
    ['java']: `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World! Code with NJ");
        }
    }
    `,
    ['cpp']: `
    #include <iostream>
    int main() {
        // Write C++ code here
        std::cout << "Hello World! Code with NJ";
        return 0;
    }
    `
  }
  const createNewPlayGround = (newPlayGround) =>{
    const {folderName,fileName,language} = newPlayGround;
    const newFolders=[...folders];
    newFolders.push({
      id: v4(),
      title:folderName,
      files:[
        {
          id:v4(),
          title: fileName,
          code: defaultCode[language],
          language,
        }
      ]
    })
    localStorage.setItem('data',JSON.stringify(newFolders))
    setFolders(newFolders);
  }

  const createNewFolder = (FolderName)=>{
    const newFolders=[...folders];
    newFolders.push({
      id: v4(),
      title:FolderName,
      files:[],
    })
    localStorage.setItem('data',JSON.stringify(newFolders))
    setFolders(newFolders);
  }

  const deleteFolder = (id) => {
    const updatedFolderList= folders.filter(folder => folder.id !== id);
    localStorage.setItem('data',JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  }
  const editFolderTitle = (id, newTitle) => {
    const updatedFolderList = folders.map(folder => {
      if (folder.id === id) {
        folder.title=newTitle;
      }
      return folder;
    })
    localStorage.setItem('data',JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  }
  
  const editFileTitle = (folderId,fileId,newFileTitle)=>{
    const updatedFolderList = folders.map(folder => {
      if (folder.id === folderId) {
        const updateFileList = folder.files.map(file => {
          if (file.id === fileId) {
            file.title = newFileTitle;
          }
          return file;
        });
      folder.files= updateFileList
      }
      return folder;
    });
    localStorage.setItem('data',JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  }

  const deleteFile = (folderId,fileId)=>{
    const updatedFolderList = folders.map(folder => {
      if (folder.id === folderId) {
        const updatedFileList = folder.files.filter(file => file.id !== fileId);
        folder.files = updatedFileList;
      }
      return folder;
    })
    localStorage.setItem('data',JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  }

  const createNewFile = (folderId,fileTitle,language) => {
    const updatedFolderList = folders.map(folder => {
      if (folder.id === folderId) {
        const newFile = {
          id: v4(),
          title: fileTitle,
          code: defaultCode[language],
          language: language,
        }
        folder.files=[...folder.files,newFile];
      }
      return folder;
    })
    localStorage.setItem('data',JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  }

  const playGroundFeature = {
    folders,
    createNewPlayGround,
    createNewFolder,
    deleteFolder,
    editFolderTitle,
    editFileTitle,
    deleteFile,
    createNewFile
  }

  return (
    <PlayGroundContext.Provider value={playGroundFeature}>
      {children}
    </PlayGroundContext.Provider>
  )
}

export default PlayGroundProvider
