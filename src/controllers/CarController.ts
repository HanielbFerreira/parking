import Cars from '../models/CarSchema';
import { Request, Response } from 'express';


export class CarController {

    public getCar(_: Request, res: Response) {
        Cars.find().exec().then(cars => res.status(200).json(cars));
    }

    public createCar(req: Request, res: Response) {
        Cars.create(req.body).then(car => res.status(201).send(car));
    }

    public getCarById(req: Request, res: Response) {
        Cars.findById(req.params.carId, (err, car) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json(car);
        });
    }

    public updateCar(req: Request, res: Response) {
        Cars.findByIdAndUpdate({ _id: req.params.carId }, req.body, { new: true }, (err, car) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json(car);
        })
    }

    public deleteCar(req: Request, res: Response) {
        Cars.findByIdAndRemove({ _id: req.params.carId }, (err) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json({ message: 'Successfully deleted the car!' });
        });
    }

}