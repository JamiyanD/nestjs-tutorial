import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

// const service = new NinjasService();
// const controller = new NinjasController(service)

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}
    
    @Get()
    getNinjas(@Query('type') weapon : 'stars' | 'nunchucks') {
        // const service = new NinjasService()
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id') 
    getOneNinja(@Param('id') id: string) {
        return this.ninjasService.getNinja(+id)
    }
    
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto)
    }

    @Put(':id')
    updateNinja(@Param('id') id: string) {
        return this.ninjasService.updateNinja(+id, UpdateNinjaDto)
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return this.ninjasService.removeNinja(+id)
    }

}