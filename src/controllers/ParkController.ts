import Park from '../models/ParkSchema';
import { Request, Response } from 'express'

export class ParkController {

    public getAllParks(_: Request, res: Response) {
        Park.find().populate('cars').exec().then((park => res.status(200).json(park)));
    }

    public createPark(req: Request, res: Response) {
        Park.create(req.body).then(park => {
            res.status(201).json(park)
        }).catch(err => {
            res.status(400).send(err);
        });
    }

    public getParkById(req: Request, res: Response) {
        Park.findById(req.params.parkId, (err, park) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json(park);
        });
    }

    public updatePark(req: Request, res: Response) {
        Park.findByIdAndUpdate({ _id: req.params.parkId }, req.body, { new: true }, (err, park) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json(park);
        });
    }

    public deletePark(req: Request, res: Response) {
        Park.remove({ _id: req.params.parkId }, (err) => {
            if (err) {
                res.status(404).send(err);
            }
            res.json({ message: 'Successfully deleted the park!' });
        })
    }

}