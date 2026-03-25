import Address from "./Address";
import Phone from "./Phone";

export default class Client{
    private _name: string;
    private _cpf: string;
    private _birthDate: string;
    private _gender: string;
    private _address: Address;
    private _phones: Phone[];

    constructor(name: string, cpf: string, birthDate: string, gender: string, address: Address, phones: Phone[]) {
        this._name = name;
        this._cpf = cpf;
        this._birthDate = birthDate;
        this._gender = gender;
        this._address = address;
        this._phones = phones;
    }
    
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter cpf
     * @return {string}
     */
	public get cpf(): string {
		return this._cpf;
	}

    /**
     * Getter birthDate
     * @return {string}
     */
	public get birthDate(): string {
		return this._birthDate;
	}

    /**
     * Getter gender
     * @return {string}
     */
	public get gender(): string {
		return this._gender;
	}

    /**
     * Getter adress
     * @return {Address}
     */
	public get address(): Address {
		return this._address;
	}

    /**
     * Getter phones
     * @return {Phone[]}
     */
	public get phones(): Phone[] {
		return this._phones;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter cpf
     * @param {string} value
     */
	public set cpf(value: string) {
		this._cpf = value;
	}

    /**
     * Setter birthDate
     * @param {string} value
     */
	public set birthDate(value: string) {
		this._birthDate = value;
	}

    /**
     * Setter gender
     * @param {string} value
     */
	public set gender(value: string) {
		this._gender = value;
	}

    /**
     * Setter adress
     * @param {Address} value
     */
	public set address(value: Address) {
		this._address = value;
	}

    /**
     * Setter phones
     * @param {Phone[]} value
     */
	public set phones(value: Phone[]) {
		this._phones = value;
	}
    
} 
