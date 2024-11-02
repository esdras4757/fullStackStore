import { isMongoId, IsNotEmpty, Min, MinLength } from "class-validator";

export class CreateEnterprisesConfigurationDto {
    @MinLength(3)
    enterpriseName: string;
    logo: Express.Multer.File;
    @MinLength(3)
    defaultTheme: string;
    @MinLength(3)
    lightPrimaryColor: string;
    @MinLength(3)
    lightSecondaryColor: string;
    @MinLength(3)
    lightBackgroundColor: string;
    @MinLength(3)
    lightTextColor: string;
    @MinLength(3)
    lightButtonColor: string;
    @MinLength(3)
    darkPrimaryColor: string;
    @MinLength(3)
    darkSecondaryColor: string;
    @MinLength(3)
    darkBackgroundColor: string;
    @MinLength(3)
    darkTextColor: string;
    @MinLength(3)
    darkButtonColor: string;
    @MinLength(3)
    currency: string;
}
