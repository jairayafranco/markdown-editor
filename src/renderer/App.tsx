import { useCallback, useState } from 'react'
import './App.css'
import Editor from './editor'
import Preview from './preview'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hola mundo')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />  
      <Preview doc={doc} />
    </div>
  );
};

export default App
