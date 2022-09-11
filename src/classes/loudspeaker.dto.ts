export class LoudspeakerDto {
    id: number;
    model_name: string;
    description: string;
    company: string;
    frequency_range: string;
    power: string;
    sensitivity: string;
    refractive_frequency: string;
    constructor(id: number, model_name:string, description: string, company: string, frequency_range: string,
                power: string, sensitivity: string, refractive_frequency:string) {
        this.id = id;
        this.model_name = model_name;
        this.description = description;
        this.company = company;
        this.frequency_range = frequency_range;
        this.power = power;
        this.sensitivity = sensitivity;
        this.refractive_frequency = refractive_frequency;


    }

}