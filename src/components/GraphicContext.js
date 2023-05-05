import { createContext } from 'react';

const GraphicContext = createContext({
    activeGraphic: null,
    setActiveGraphic: () => {},
});

export default GraphicContext;
