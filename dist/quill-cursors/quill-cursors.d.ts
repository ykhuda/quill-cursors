import IQuillCursorsOptions from './i-quill-cursors-options';
import Cursor from './cursor';
import IQuillRange from './i-range';
export default class QuillCursors {
    private readonly _cursors;
    private readonly _quill;
    private readonly _container;
    private readonly _boundsContainer;
    private readonly _options;
    private _currentSelection;
    constructor(quill: any, options?: IQuillCursorsOptions);
    createCursor(id: string, name: string, color: string): Cursor;
    moveCursor(id: string, range: IQuillRange, scale?: number): void;
    removeCursor(id: string): void;
    update(): void;
    clearCursors(): void;
    toggleFlag(id: string, shouldShow?: boolean): void;
    cursors(): Cursor[];
    private _registerSelectionChangeListeners;
    private _registerTextChangeListener;
    private _registerDomListeners;
    private _updateCursor;
    private _indexWithinQuillBounds;
    private _leafIsValid;
    private _handleTextChange;
    private _emitSelection;
    private _setDefaults;
    private _lineRanges;
    private _transformCursors;
}
