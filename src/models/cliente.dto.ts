export interface ClienteDTO {
    id : string;
    nome : string;
    email : string;
    imageUrl? : string; //A interrogação (?) nos diz que esse atributo não precisa ser preenchido.
}