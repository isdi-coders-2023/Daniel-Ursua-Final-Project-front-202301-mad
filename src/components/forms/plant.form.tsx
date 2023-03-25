/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { ProtoPlant, Location } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";

export function PlantForm() {
  debugger;
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { addPlant, plants } = usePlants(repo);
  const actualPlant = plants.actualPlant;

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formAddPlant = ev.currentTarget;
    const file = (formAddPlant.elements[9] as HTMLInputElement).files?.item(0);
    if (!file) return;
    const addInfo: ProtoPlant = {
      name: (formAddPlant.elements[0] as HTMLInputElement).value,
      location: (
        formAddPlant.elements.namedItem("location") as HTMLInputElement
      ).value as Location,
      height: (formAddPlant.elements[4] as HTMLInputElement).value,
      humidity: (formAddPlant.elements[5] as HTMLInputElement).value,
      lightness: (formAddPlant.elements[6] as HTMLInputElement).value,
      difficulty: (formAddPlant.elements[7] as HTMLInputElement).value,
      petFriendly: (formAddPlant.elements[8] as HTMLInputElement).checked,
    };
    addPlant(addInfo, file);

    formAddPlant.reset();
  };

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="password"
          role="textbox"
          required
          defaultValue={actualPlant ? actualPlant.name : ""}
        />
        <label>
          Indoor
          <input
            type="radio"
            name="location"
            value="indoor"
            required
            defaultChecked={
              actualPlant ? actualPlant.location === "indoor" : false
            }
          />
        </label>
        <label>
          Outdoor
          <input
            id="outdoor"
            type="radio"
            name="location"
            value="outdoor"
            defaultChecked={
              actualPlant ? actualPlant.location === "outdoor" : false
            }
          />
        </label>
        <label>
          Both
          <input
            id="both"
            type="radio"
            name="location"
            value="both"
            defaultChecked={
              actualPlant ? actualPlant.location === "both" : false
            }
          />
        </label>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          min="5"
          max="200"
          step="1"
          required
          defaultValue={actualPlant ? actualPlant.height : 5}
        />
        <span>cms.</span>

        <label htmlFor="humidity">Humidity</label>
        <input
          type="range"
          name="humidity"
          min="1"
          max="4"
          step="2"
          defaultValue={actualPlant ? actualPlant.humidity : 2}
        />
        <p>Dry</p>
        <p>Moist</p>
        <label htmlFor="lightness">Lightness</label>
        <input
          type="range"
          name="lightness"
          min="1"
          max="4"
          step="2"
          defaultValue={actualPlant ? actualPlant.lightness : 2}
        />
        <p>Shade</p>
        <p>Sunny</p>
        <label htmlFor="difficulty">Difficulty</label>
        <input
          type="range"
          name="difficulty"
          min="1"
          max="4"
          step="2"
          defaultValue={actualPlant ? actualPlant.difficulty : 2}
        />
        <p>Beginner</p>
        <p>Expert</p>
        <input
          type="checkbox"
          name="petFriendly"
          required
          defaultChecked={actualPlant ? actualPlant.petFriendly : false}
        />
        <label htmlFor="petFriendly">Pet friendly</label>
        <label>
          Upload photo
          <input type="file" placeholder="Photo" name="photo" required />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
