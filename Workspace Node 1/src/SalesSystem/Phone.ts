export default class Phone{
    private _ddd: string;
    private _number: string;
    private _type: string;

    constructor(ddd: string, number: string, type: string) {
        this._ddd = ddd;
        this._number = number;
        this._type = type;
    }

    /**
     * Getter ddd
     * @return {string}
     */
	public get ddd(): string {
		return this._ddd;
	}

    /**
     * Getter number
     * @return {string}
     */
	public get number(): string {
		return this._number;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Setter ddd
     * @param {string} value
     */
	public set ddd(value: string) {
		this._ddd = value;
	}

    /**
     * Setter number
     * @param {string} value
     */
	public set number(value: string) {
		this._number = value;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}


}