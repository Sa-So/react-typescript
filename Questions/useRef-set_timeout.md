# why did they use useRef for setTimeout ?
# why was it's type {current: NodeJS.TimeOut , null|undefined }
- It can be used to store a mutable value that does not cause a re-render when updated.
- weird.
