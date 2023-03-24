/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../hook/use.plants";
import { ProtoPlant, Ubication } from "../../models/plant.model";
import { PlantsApiRepo } from "../../services/plants.api.repo";

export function PlantForm() {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { addPlant } = usePlants(repo);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formAddPlant = ev.currentTarget;
    const file = (formAddPlant[9] as HTMLInputElement).files?.item(0);
    if (!file) return;
    const addInfo: ProtoPlant = {
      name: (formAddPlant.elements[0] as HTMLInputElement).value,
      ubication: (
        formAddPlant.elements.namedItem("ubication") as HTMLInputElement
      ).value as Ubication,
      height: (formAddPlant.elements[4] as HTMLInputElement).value,
      lightness: (formAddPlant.elements[5] as HTMLInputElement).value,
      humidity: (formAddPlant.elements[6] as HTMLInputElement).value,
      difficult: (formAddPlant.elements[7] as HTMLInputElement).value,
      petFriendly: (formAddPlant.elements[8] as HTMLInputElement).checked,
    };
    addPlant(addInfo, file);

    formAddPlant.reset();
  };

  return (
    <>
      <form className="login-form" data-testid="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="login-form__field"
          name="password"
          role="textbox"
        />
        <label>
          Indoor
          <input type="radio" name="ubication" value="indoor" />
        </label>
        <label>
          Outdoor
          <input type="radio" name="ubication" value="outdoor" />
        </label>
        <label>
          Both
          <input type="radio" name="ubication" value="both" />
        </label>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          min="5"
          max="200"
          step="1"
          placeholder="5"
        />
        <span>cms.</span>

        <label htmlFor="humadity">Humadity</label>
        <input type="range" name="humadity" min="1" max="3" step="1" />
        <p>Dry</p>
        <p>Moist</p>
        <label htmlFor="lightness">Lightness</label>
        <input type="range" name="lightness" min="1" max="3" step="1" />
        <p>Shade</p>
        <p>Sunny</p>
        <label htmlFor="difficult">Difficult</label>
        <input type="range" name="difficult" min="1" max="3" step="1" />
        <p>Beginner</p>
        <p>Expert</p>
        <input type="checkbox" name="petFriendly" />
        <label htmlFor="petFriendly">Pet friendly</label>
        <input
          type="text"
          placeholder="Photo"
          className="login-form__field"
          name="photo"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
