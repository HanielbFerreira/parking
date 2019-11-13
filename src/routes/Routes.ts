import { Request, Response, NextFunction } from "express";
import { CarController } from '../controllers/CarController';
import { ParkController } from '../controllers/ParkController';

export class Routes {

    private carController: CarController = new CarController();
    private parkController: ParkController = new ParkController();

    public carRoutes(app: any) {

        app.route('/car')
            .get((_: Request, __: Response, next: NextFunction) => {
                next();
            }, this.carController.getCar)
            .post(this.carController.createCar);

        app.route('/car/:carId')
            .get(this.carController.getCarById)
            .put(this.carController.updateCar)
            .delete(this.carController.deleteCar)

    }

    public parkRoutes(app: any) {

        app.route('/park')
            .get(this.parkController.getAllParks)
            .post(this.parkController.createPark);


        app.route('/park/:parkId')
            .get(this.parkController.getParkById)
            .put(this.parkController.updatePark)
            .delete(this.parkController.deletePark)

    }



}