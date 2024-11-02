import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true }) // Agrega createdAt y updatedAt automáticamente
export class Enterprises extends Document {
    
    @Prop({
        required: true,
        unique: true,
    })
    enterpriseName: string;

    @Prop({
        required: true,
        default: "https://placecats.com/300/200",
    })
    logoUrl: string;


    @Prop()
    country: string;

    @Prop({
        default: "light", // Define el tema predeterminado como claro
        enum: ["light", "dark"], // Restringe los valores a light o dark
    })
    defaultTheme: string;

    // Configuración de tema claro
    @Prop()
    lightPrimaryColor: string;

    @Prop()
    lightSecondaryColor: string;

    @Prop()
    lightBackgroundColor: string;

    @Prop()
    lightTextColor: string;

    @Prop()
    lightButtonColor: string;

    // Configuración de tema oscuro
    @Prop()
    darkPrimaryColor: string;

    @Prop()
    darkSecondaryColor: string;

    @Prop()
    darkBackgroundColor: string;

    @Prop()
    darkTextColor: string;

    @Prop()
    darkButtonColor: string;

    @Prop()
    currency: string;

    @Prop()
    language: string;

    @Prop()
    timezone: string;
}

export const EnterprisesSchema = SchemaFactory.createForClass(Enterprises);
